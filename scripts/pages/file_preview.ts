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
}
