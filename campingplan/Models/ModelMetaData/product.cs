﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Web.Mvc;
using Newtonsoft.Json;
//------------------------------------------------------------------------------
// <auto-generated>
//     這個程式碼是由範本產生。
//
//     對這個檔案進行手動變更可能導致您的應用程式產生未預期的行為。
//     如果重新產生程式碼，將會覆寫對這個檔案的手動變更。
// </auto-generated>
//------------------------------------------------------------------------------

namespace campingplan.Models
{
    [MetadataType(typeof(ProductsMetaData))]
    public partial class product
    {
        [Display(Name = "熱門")]
        public bool bool_istop {
            get { return istop == 1; }
            set { istop = value ? 1 : 0; }
        }
        [Display(Name = "上架")]
        public bool bool_issale
        {
            get { return issale == 1; }
            set { issale = value ? 1 : 0;  }
        }
        [Display(Name = "最低價錢")]
        public int min_price
        {
            get
            {
                if (min_price_ != null)
                {
                    return min_price_.GetValueOrDefault();
                }
                int output = 99999999;
                foreach (var ptd in product_typedetail)
                {
                    output = Math.Min(output, ptd.ptype_price.GetValueOrDefault());
                }
                min_price_ = output;
                return output;
            }
            set
            {
                min_price_ = value;
            }
        }
        private int? min_price_ { get; set; }
        private class ProductsMetaData
        {
            [Key]
            [Display(Name = "記錄ID")]
            public int rowid { get; set; }
            [Display(Name = "分類ID")]
            public Nullable<int> categoryid { get; set; }
            [Display(Name = "商品分類")]
            public string category_name { get; set; }
            [Display(Name = "熱門商品")]
            public Nullable<int> istop { get; set; }
            [Display(Name = "上架銷售")]
            public Nullable<int> issale { get; set; }
            [Display(Name = "瀏覽次數")]
            public Nullable<int> browse_count { get; set; }
            [Display(Name = "廠商編號")]
            public string vendor_no { get; set; }
            [Display(Name = "商品編號")]
            public string pno { get; set; }
            [Display(Name = "商品名稱")]
            public string pname { get; set; }
            [Display(Name = "商品地點")]
            public string plocation { get; set; }
            [Display(Name = "商品 Google Map URL")]
            public string pmapurl { get; set; }
            [Display(Name = "商品敘述")]
            public string pdescription { get; set; }

            [Display(Name = "推薦星數")]
            public Nullable<int> start_count { get; set; }
            [Display(Name = "備註")]
            public string remark { get; set; }

            [JsonIgnore]
            public virtual ICollection<product_typedetail> product_typedetail { get; set; }

            [JsonIgnore]
            public virtual product_features product_features { get; set; }
        }
    }
}