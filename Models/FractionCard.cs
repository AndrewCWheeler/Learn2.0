using System.ComponentModel.DataAnnotations;
using System;
namespace Learn.Models
{
public class FractionCard
{
    [Key]
    public int Id { get; set; }
    public int Dividend { get; set; }
    public int Divisor { get; set; }
    public int DividendTwo { get; set; }
    public int DivisorTwo { get; set; }
    public decimal DecimalDividend { get; set; }
    public decimal DecimalDivisor { get; set; }
    public string First { get; set; }
    public string Second { get; set; }
    public int? Whole { get; set; }
    public int? WholeTwo { get; set; }
    public string Answer { get; set; }
    public int AnswerModulus { get; set; }
    public int AnswerDividend { get; set; }
    public int AnswerDivisor { get; set; }
    public int? AnswerWhole { get; set; }
    public string AnswerTwo { get; set; }
    public decimal AnswerDecimal { get; set; }
    public int Modulus { get; set; }
    public int ModulusTwo { get; set; }
    public string Category { get; set; } = "Fractions Basic";
    public string Level { get; set; } = "Practice";
    public DateTime CreatedAt { get; set; } = DateTime.Now;
    public DateTime UpdatedAt { get; set; } = DateTime.Now;
}
}

