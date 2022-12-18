using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace RegisterAgainAPI.Model
{
    public class RegisterDBContext: DbContext
    {
        public RegisterDBContext(DbContextOptions options) : base(options) 
        {
        }
        public DbSet<User> Users { get; set; }
        public DbSet<Designation> Designations { get; set; }
        public DbSet<Employee> Employees { get; set; }  
    }
}
