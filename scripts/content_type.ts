$content_type

# Repair content-types by path. They don't set the content-type properly

match($path, /^\/search\/warmup|^\/jse|^\/fb\/post|^\/web_timing_log|^\/add_sprites_used|^\/shmlog/) {
	$content_type = "text/plain"
}

match($path, /^\/cmd\/new[\/\?]?|^\/get_contacts[\/\?]?|^\/cmd\/delete[\/\?]?|^\/cmd\/rollback[\/\?]?/) {
	$content_type = "aaplication/json"
}