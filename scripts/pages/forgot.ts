$("/html/body") {
  add_class("mw_forgot")

  $(".//div[@id='page-full-footer' or @id='page-header']") {
    add_class("mw_hide")
  }
  $(".//div[@class='sick-input']//input[@type='text']") {
    attributes(placeholder: "Email")
  }
}