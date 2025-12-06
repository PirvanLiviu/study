using Api.Models;
using Microsoft.EntityFrameworkCore;

namespace Api.Data;

public class StudyDbContext : DbContext
{
  public StudyDbContext(DbContextOptions opts) : base(opts)
  {}

  public DbSet<Question> Questions { get; set; } = null!;
  protected override void OnModelCreating(ModelBuilder modelBuilder)
  {
    modelBuilder.Entity<Question>().ToTable("questions");
    modelBuilder.Entity<Question>().HasKey(q => q.Id);

    modelBuilder.Entity<Question>()
      .Property(q => q.Id)
      .HasColumnName("id");

    modelBuilder.Entity<Question>()
      .Property(q => q.Text)
      .HasColumnName("text");

    modelBuilder.Entity<Question>()
      .Property(q => q.Answer)
      .HasColumnName("answer");

    modelBuilder.Entity<Question>()
      .Property(q => q.Label)
      .HasColumnName("label");
  }
    
}
