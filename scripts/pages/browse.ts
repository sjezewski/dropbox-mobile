$("/html/body") {
  add_class("mw_browse")
  
  $(".//div[@id='context-menu-container']") {
    insert_after("div", id: 'context-mask')
  }
}