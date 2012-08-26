# Place holder/example file

$login_url = "https://www.dropbox.com/login"
$login_url {
  rewrite("link") 
}

$landing_url = "https://www.dropbox.com/home"
$login_url {
  rewrite("link")
}

# Redirect to login page
export("Location", $login_url + "?cont=" + $landing_url)