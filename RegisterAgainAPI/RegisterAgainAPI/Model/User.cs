﻿using System;

namespace RegisterAgainAPI.Model
{
    public class User
    {
        public int UserID { get; set; }
        public String FirstName { get; set; }
        public String LastName { get; set; }
        public String Email { get; set; }
        public String Mobile { get; set; }
        public String Gender { get; set; }
        public String Pwd { get; set; }
        public DateTime MemberSince { get; set; }
    }
}
