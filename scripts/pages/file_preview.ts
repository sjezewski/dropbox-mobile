$("/html/body") {
  add_class("mw_file_preview")

  $(".//div[@class='nav-header']/div[contains(@class, 'buttons')][a[contains(@class, freshbutton)]]") {
  #$(".//div[@class='nav-header']/div[contains(@class, 'buttons')][a[@id='download_button_link']]") {
    # match_not(fetch("/html/body/@class"), /empty-folder/) {
      add_class("mw_next_line")
      $("/html/body") {
        add_class("mw_long_header")
      }
    # }
  }


  # Long URL:
  # $link = fetch(".//a[@id='download_button_link']/@href")

  # Short URL:
  $(".//a[@class='freshbutton-blue']") {
    attribute("onclick") {
      value() {
        replace(/'(\S*?\\x2ett\\x2f\w*?)['"]/) {
          $1 {
            replace("\\x3a",":")
            replace("\\x2f", "/")
            replace("\\x2e", ".")            
          }
          $link = $1
        }
      }
    }
  }
  
  $(".//div[@id='modal-content']") {
    insert_before("div", id: "mw_link_prompt_container") {
      insert("div", id: "mw_link_prompt") {
        insert("label", for: "mw_share_link") {
          text("Copy Link:")
        }
        insert("input", id: "mw_share_link", type: "text", value: $link) 
      }
    }
  }

}
