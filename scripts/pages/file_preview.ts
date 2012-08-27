$("/html/body") {
  add_class("mw_file_preview")

  $("self::*[contains(@class, 'file-preview-body') and not(contains(@class, '-folder'))]") {
    $(".//div[@class='nav-header']/div[contains(@class, 'shmodel-filename')]") {
      add_class("mw_header_filename")
      move_to("./parent::div", "after") {
        $("./following-sibling::div[@id='shmodel-content-area']//div[@id='crocodoc-preview']") {
          add_class("mw_top_changed")
        }
      }
    }
  }
  $(".//a[@id='create-an-account-button']") {
    wrap ("div", class: "mw_create_acc") {
      move_to("./ancestor::div[@class='nav-header']", "after")
      $("./following-sibling::div[@id='shmodel-content-area']//div[@id='crocodoc-preview']") {
        add_class("mw_top_changed_2")
      }
    }
  }
  $(".//a[@class = 'fb-connect-link']") {
    move_to("./ancestor::div[@id = 'shmodal-send-form-inputs']", "top")
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
