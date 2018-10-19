(function ($) {
    var csrftoken = $.getCookie('csrftoken');
    var static_url = window.__admin_media_prefix__.replace(/xadmin\/$/i, "xplugin-grouprel/");
    $('#ajax-table').DataTable({
        "ajax": {
            "url": ajax_table_url,
            "type": "POST",
            beforeSend: function (xhr, settings) {
                xhr.setRequestHeader("X-CSRFToken", csrftoken);
            }
        },
        "language": {
            "url": static_url + window.__admin_language_code__ + ".json"
        },
        "processing": true,
        "serverSide": true,
    });

})(jQuery);