$("./body") {
  add_class("mw_login")
  # Hide items
  $(".//div[@id='page-full-footer' or @id='page-header']") {
    add_class("mw_hide")
  }
  # Remove big picture
  $(".//div[@id='login-container']") {
    $(".//img") {
      remove()
    }
  }
  # Move the "remember me"
  $(".//div[@id='remember-me']") {
    move_to("./preceding-sibling::input", "before")
  }
}