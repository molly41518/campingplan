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
    using System;
    using System.Collections.Generic;
    
    public partial class product
    {
        public int rowid { get; set; }
        public Nullable<int> categoryid { get; set; }
        public string pno { get; set; }
        public string pname { get; set; }
        public string pdescription { get; set; }
        public Nullable<int> pprice { get; set; }
        public string pimg { get; set; }
        public string plocation { get; set; }
    }
}
