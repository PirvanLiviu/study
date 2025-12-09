using Api.Models;

namespace Api.Services;

public static class FilterServices
{
  public static Filter StringToFilter(string str)
  {
    var filter = new Filter { };

    foreach (string s in str.Split("&"))
    {
      string[] row = s.Split("=");
      if (row[0] == "AM")
        filter.AM = int.Parse(row[1]);
      else if (row[0] == "DS")
        filter.DS = int.Parse(row[1]);
      else if (row[0] == "DM")
        filter.DM = int.Parse(row[1]);
      else if (row[0] == "CN")
        filter.CN = int.Parse(row[1]);
    }

    return filter;
  }
}
