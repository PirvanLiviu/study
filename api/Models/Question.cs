namespace Api.Models;

public class Question 
{
  public int Id { get; set; }
  public string Text { get; set; } = string.Empty;
  public string Answer { get; set; } = string.Empty;
  public string Label { get; set; } = string.Empty;
}
