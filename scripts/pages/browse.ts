$("/html/body") {
  add_class("mw_browse")

  # remove the image that is displayed when the folder is empty
  remove (".//div[@id='browse-empty']/img")

  # insert_bottom("div", class: "mw_mask_dropdown", onclick: "x$('.mw_mask_dropdown').toggleClass('mw_mask_active');x$('#breadcrumb-dropdown').toggleClass('mw_active');")


  $(".//div[@id='context-menu-container']") {
    insert_after("div", id: 'context-mask')
  }

  $(".//div[@id='browse-box']") {
    insert_after("a", "Log Out", id: "mw_log_out", href: "/logout")
  }

}