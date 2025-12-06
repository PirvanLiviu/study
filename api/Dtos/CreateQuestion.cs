namespace Api.Dtos;

public class CreateQuestion
{
  public string Text { get; set; } = string.Empty;
  public string Answer { get; set; } = string.Empty;
  public string Label { get; set; } = string.Empty;
}
