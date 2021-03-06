/*
  Mappings

  Mappings are matchers that we use to determine if we should execute a
  bit of Tritium during an execution. Aka, run something when we are
  are on a certain page.

  Example starting code:
*/

match($status) {

  with(/302/) {
    log("--> STATUS: 302") # redirect: just let it go through
  }

  with(/200/) {
    log("--> STATUS: 200")

    match($path) {
      with(/^\/login/) {
        log("--> Importing pages/login.ts in mappings.ts")
        @import pages/login.ts
      }
      with(/^\/$|^\/\?/) {
        log("--> Importing pages/home.ts in mappings.ts")
        @import pages/home.ts
      }
      with(/^\/home\/?/) {
        log("--> Importing pages/browse.ts in mappings.ts")
        @import pages/browse.ts
      }
      with(/^\/forgot/) {
        log("--> Importing pages/forgot.ts in mappings.ts")
        @import pages/forgot.ts
      }
      else() {
        $("/html/body[contains(@class, 'shmodel-body')]") {
          log("--> Importing pages/file_preview.ts in mappings.ts")
          @import pages/file_preview.ts
        }
      }
    }
  }

  else() {
    # not 200 or 302 response status
    log("--> STATUS: " + $status + " assuming its an error code pages/error.ts")
  }

}
