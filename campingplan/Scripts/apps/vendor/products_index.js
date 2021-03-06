﻿$(document).ready(function () {
    var oTable = $('#DatatableList').DataTable({
        "ajax": {
            "url": '/Vendor/Products/GetDataList',
            "type": "get",
            "datatype": "json"
        },
        "language": {
            "sProcessing": "處理中...",
            "sLengthMenu": "顯示 _MENU_ 項結果",
            "sZeroRecords": "沒有匹配結果",
            "sInfo": "顯示第 _START_ 至 _END_ 項結果，共 _TOTAL_ 項",
            "sInfoEmpty": "顯示第 0 至 0 項結果，共 0 項",
            "sInfoFiltered": "(從 _MAX_ 項結果過濾)",
            "sInfoPostFix": "",
            "sSearch": "查詢:",
            "sUrl": "",
            "oPaginate": {
                "sFirst": "首頁",
                "sPrevious": "上頁",
                "sNext": "下頁",
                "sLast": "尾頁"
            }
        },
        "columns": [
            {
                "data": "rowid", "width": "30px", "orderable": false, "render": function (data) {
                    return '<a class="popup"  title="修改商品" href="/Vendor/Products/Edit/' + data + '"><i class="fas fa-edit fa-2x"></i></a>' +
                        '<a class="popup" title="刪除記錄" href="/Vendor/Products/Delete/' + data + '"><i class="fas fa-trash-alt fa-2x"></i></a>' +
                        '<a class="popup" title="上傳圖片" href="/Vendor/Products/Upload/' + data + '"><i class="fas fa-upload fa-2x"></i></a>' +
                        '<a class="popup" title="商品描述" href="/Vendor/Products/Pdescription/' + data + '"><i class="fas fa-file-alt fa-2x"></i></a>' +
                        '<a title="商品詳細頁" href="/Vendor/ProductTypeDetail/Index/' + data + '" ><i class="fas fa-arrow-right fa-2x"></i></a>';''
                }
            },
            {
                "data": "pno", "width": "50px", "orderable": false, "render": function (data) {
                    return '<img src="../../Content/images/product/' + data + '/' + data + '.jpg" class="avatar" style="width:48px;height:48px;" />';
                }
            },
            { "data": "pno", "width": "50px" },
            { "data": "pname", "autoWidth": true },
            { "data": "category_name", "width": "100px" },
            {
                "data": "istop", "width": "30px", "render": function (data) {
                    if (data === 1) {
                        return '<input type="checkbox" checked="checked" disabled="disabled" />';
                    }
                    else {
                        return '<input type="checkbox" disabled="disabled" />';
                    }
                }
            },
            {
                "data": "issale", "width": "30px", "render": function (data) {
                    if (data === 1) {
                        return '<input type="checkbox" checked="checked" disabled="disabled" />';
                    }
                    else {
                        return '<input type="checkbox" disabled="disabled" />';
                    }
                }
            },
            { "data": "start_count", "width": "30px" },
            { "data": "browse_count", "width": "30px" }
        ]
    })
    $('.tablecontainer').on('click', 'a.popup', function (e) {
        e.preventDefault();
        OpenPopup($(this).attr('href'));
    })
    function OpenPopup(pageUrl) {
        var $pageContent = $('<div/>');
        $pageContent.load(pageUrl, function () {
            $('#popupForm', $pageContent).removeData('validator');
            $('#popupForm', $pageContent).removeData('unobtrusiveValidation');
            $.validator.unobtrusive.parse('form');

        });

        $dialog = $('<div class="popupWindow" style="overflow:auto"></div>')
            .html($pageContent)
            .dialog({
                draggable: true,
                autoOpen: false,
                resizable: true,
                model: true,
                title: '編輯視窗',
                height: 600,
                width: 780,
                close: function () {
                    $dialog.dialog('destroy').remove();
                }
            })

        $('.popupWindow').on('submit', '#popupForm', function (e) {
            var url = $('#popupForm')[0].action;
            $.ajax({
                type: "POST",
                url: url,
                data: $('#popupForm').serialize(),
                success: function (data) {
                    if (data.status) {
                        $dialog.dialog('close');
                        oTable.ajax.reload();
                    }
                }
            })
            e.preventDefault();
        })
        $dialog.dialog('open');
    }
})
