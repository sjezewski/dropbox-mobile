$content_type

# Repair content-types by path. They don't set the content-type properly

match($path, /^\/search\/warmup|^\/jse|^\/fb\/post|^\/web_timing_log|^\/add_sprites_used|^\/shmlog|^\/google\/have_user/) {
	$content_type = "text/plain"
}

match($path, /^\/cmd\/(new|delete|rollback|copy|move|rename)[\/\?]?|^\/get_contacts[\/\?]?/) {
	$content_type = "aaplication/json"
}