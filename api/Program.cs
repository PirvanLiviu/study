using Api.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();

builder.Services.AddCors(options => 
  {
    options.AddPolicy(name: "cors",
                      policy => 
                      {
                        policy.WithOrigins("localhost:5173").WithMethods("*").WithHeaders("*");
                      });
  });

builder.Services.AddDbContext<StudyDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();
app.UseCors("cors");
app.MapControllers();

app.Run();
