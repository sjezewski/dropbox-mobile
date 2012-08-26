# HTML Transformations go here

$("/html") {
  rewrite_links()
  absolutize_srcs()
  insert_mobile_meta_tags()
  
  #  remove_all_styles()    
  add_assets()

  @import sections/header.ts
  @import sections/footer.ts

  @import mappings.ts

}

