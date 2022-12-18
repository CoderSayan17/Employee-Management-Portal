using System.ComponentModel.DataAnnotations;

namespace RegisterAgainAPI.Model
{
    public class Designation
    {
        [Key]
        public int Id { get; set; }
        public string DesignationName { get; set; }
        public string RoleName { get; set; }
        public string Department { get; set; }
    }
}
