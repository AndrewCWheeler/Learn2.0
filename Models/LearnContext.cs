using Microsoft.EntityFrameworkCore;
using Learn.Models;

namespace Learn.Data
{
    public class LearnContext : DbContext
    {
        public LearnContext (DbContextOptions<LearnContext> options) : base(options) {}
        public DbSet<User> Users { get; set; }
    }
}