using Api.Models;
using Api.Dtos;
using Api.Data;
using Api.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Api.Controllers;

[ApiController]
[Route("/api/[controller]")]
public class QuestionsController : ControllerBase
{
  private StudyDbContext _context;

  public QuestionsController(StudyDbContext context)
  {
    _context = context;
  }

  [HttpGet("{filter}")]
  public async Task<IActionResult> GetQuestions([FromRoute] string filter)
  {
    try
    {
      var filters = FilterServices.StringToFilter(filter);
      var res = await _context.Questions.ToListAsync();

      return Ok(res);
    } catch(Exception e)
    {
      Console.WriteLine(e.Message);
      return BadRequest(e.Message);
    }
  }

  [HttpPost]
  public async Task<IActionResult> AddQuestion([FromBody] CreateQuestion createQuestion)
  {
    try
    {
      var newQuestion = new Question
      {
        Text = createQuestion.Text,
        Answer = createQuestion.Text,
        Label = createQuestion.Label
      };

      await _context.Questions.AddAsync(newQuestion);
      await _context.SaveChangesAsync();

      return Ok("Question added");
    } catch(Exception e)
    {
      Console.WriteLine(e.Message);
      return BadRequest(e.Message);
    }
  }

  [HttpPut("{id:int}")]
  public async Task<IActionResult> EditQuestion([FromRoute] int id,[FromBody] EditQuestion editQuestion)
  {
    try
    {
      var q = await _context.Questions.FindAsync(id);
      if (q == null)
        return BadRequest(new { e = "No question found" });
      if (!String.IsNullOrWhiteSpace(editQuestion.Text))
        q.Text = editQuestion.Text;
      if (!String.IsNullOrWhiteSpace(editQuestion.Answer))
        q.Answer = editQuestion.Answer;
      if (!String.IsNullOrWhiteSpace(editQuestion.Label))
        q.Label = editQuestion.Label;

      await _context.SaveChangesAsync();
      return Ok("Question updated");
    } catch(Exception e)
    {
      Console.WriteLine(e.Message);
      return BadRequest(new { e = e.Message, trace = e.StackTrace });
    }
  }

  [HttpDelete("{id:int}")]
  public async Task<IActionResult> DeleteQuestion([FromRoute] int id)
  {
    try
    {
      var q = await _context.Questions.FindAsync(id);
      if (q == null)
        return BadRequest(new { e = "No question found" });

      _context.Questions.Remove(q);
      await _context.SaveChangesAsync();
      return Ok("Question deleted");
    } catch(Exception e)
    {
      Console.WriteLine(e.Message);
      return BadRequest(new { e = e.Message, trace = e.StackTrace });
    }
  }
}
