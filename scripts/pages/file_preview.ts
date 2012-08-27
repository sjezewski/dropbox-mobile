$("/html/body") {
  add_class("mw_file_preview")

  $(".//div[@class='nav-header']/div[contains(@class, 'buttons')][a[@id='download_button_link']]") {
    match_not(fetch("/html/body/@class"), /empty-folder/) {
      add_class("mw_next_line")
      $("/html/body") {
        add_class("mw_long_header")
      }
    }
  }
}
