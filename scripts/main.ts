# The main file executed by Tritium. The start of all other files.
@import content_type.ts

match($content_type) {
  with(/html/) {
		replace(/fb:/, "fbn_") # Rewrite the xmlns facebook nodes before the html parser clobbers them

		html("UTF-8") {
			@import html.ts
		}

		replace(/fbn_/, "fb:") # Rewrite the xmlns facebook nodes to restore them
  }
  else() {
    log(concat("Passing through ", $content_type, " unmodified"))
  }
}