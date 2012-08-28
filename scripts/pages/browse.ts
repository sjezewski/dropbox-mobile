$("/html/body") {
  add_class("mw_browse")

  # remove the image that is displayed when the folder is empty
  remove (".//div[@id='browse-empty']/img")

  $(".//div[@id='context-menu-container']") {
    insert_after("div", id: 'context-mask')
  }

  $(".//div[@id='browse-box']") {
    insert_after("a", "Log Out", id: "mw_log_out", href: "/logout")
  }

}