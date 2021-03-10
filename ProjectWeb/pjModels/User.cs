using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;

namespace pjModels
{
    public class User : IdentityUser
    {
        public string Status { get; set; }
        public ICollection<Project> Project { get; set; }
        public ICollection<Job> Job { get; set; }
    }
}
