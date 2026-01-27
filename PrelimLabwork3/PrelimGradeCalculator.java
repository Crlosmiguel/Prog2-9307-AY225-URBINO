import javax.swing.JOptionPane;

public class PrelimGradeCalculator {

    public static void main(String[] args) {

        // Get input using dialog boxes
        double attendance = Double.parseDouble(
                JOptionPane.showInputDialog("Enter Attendance Grade:"));

        double lab1 = Double.parseDouble(
                JOptionPane.showInputDialog("Enter Lab Work 1 Grade:"));

        double lab2 = Double.parseDouble(
                JOptionPane.showInputDialog("Enter Lab Work 2 Grade:"));

        double lab3 = Double.parseDouble(
                JOptionPane.showInputDialog("Enter Lab Work 3 Grade:"));

        // Calculate averages and class standing
        double labAverage = (lab1 + lab2 + lab3) / 3;
        double classStanding = (attendance * 0.40) + (labAverage * 0.60);

        // Calculate required exam scores
        double requiredExamPass = (75 - (classStanding * 0.30)) / 0.70;
        double requiredExamExcellent = (100 - (classStanding * 0.30)) / 0.70;

        // Cap the excellent score at 100
        if (requiredExamExcellent > 100) {
            requiredExamExcellent = 100;
        }

        // Build the output string (all in one dialog)
        String summary = "----- PRELIM GRADE SUMMARY -----\n\n" +
                "Attendance: " + attendance + "\n" +
                "Lab Work 1: " + lab1 + "\n" +
                "Lab Work 2: " + lab2 + "\n" +
                "Lab Work 3: " + lab3 + "\n" +
                "Lab Average: " + String.format("%.2f", labAverage) + "\n" +
                "Class Standing: " + String.format("%.2f", classStanding) + "\n\n" +
                String.format("Required Prelim Exam (PASS): %.2f%n", requiredExamPass) +
                String.format("Required Prelim Exam (EXCELLENT, capped at 100): %.2f%n", requiredExamExcellent);

        // Show results in a single message dialog
        JOptionPane.showMessageDialog(null, summary, "Prelim Grade Summary", JOptionPane.INFORMATION_MESSAGE);
    }
}
