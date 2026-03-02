import java.awt.*;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import javax.swing.*;
import javax.swing.table.DefaultTableModel;

class SalesRecord {
    LocalDate date;
    double sales;
    String movingAverage;

    SalesRecord(String dateStr, double sales) {
        this.date = LocalDate.parse(dateStr, DateTimeFormatter.ISO_LOCAL_DATE);
        this.sales = sales;
        this.movingAverage = "-";
    }
}

public class SalesTrendGUI {

    public static void main(String[] args) {

        // Create window
        JFrame frame = new JFrame("Sales Trend - 3 Day Moving Average");
        frame.setSize(600, 400);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setLocationRelativeTo(null);

        // Title Label
        JLabel title = new JLabel("Sales Trend with 3-Day Moving Average", JLabel.CENTER);
        title.setFont(new Font("Arial", Font.BOLD, 18));
        title.setBorder(BorderFactory.createEmptyBorder(15, 10, 15, 10));

        // Sample Data
        List<SalesRecord> records = new ArrayList<>();
        records.add(new SalesRecord("2026-01-03", 200));
        records.add(new SalesRecord("2026-01-01", 100));
        records.add(new SalesRecord("2026-01-05", 300));
        records.add(new SalesRecord("2026-01-02", 150));
        records.add(new SalesRecord("2026-01-04", 250));

        // Sort by date
        records.sort(Comparator.comparing(r -> r.date));

        // Compute 3-day moving average
        for (int i = 0; i < records.size(); i++) {
            if (i >= 2) {
                double avg = (records.get(i).sales +
                              records.get(i - 1).sales +
                              records.get(i - 2).sales) / 3.0;
                records.get(i).movingAverage = String.format("%.2f", avg);
            }
        }

        // Table Columns
        String[] columnNames = {"Date", "Sales", "3-Day Moving Avg"};

        // Table Model
        DefaultTableModel model = new DefaultTableModel(columnNames, 0);

        for (SalesRecord record : records) {
            model.addRow(new Object[]{
                    record.date.toString(),
                    record.sales,
                    record.movingAverage
            });
        }

        JTable table = new JTable(model);
        table.setFont(new Font("Arial", Font.PLAIN, 14));
        table.setRowHeight(25);
        table.getTableHeader().setFont(new Font("Arial", Font.BOLD, 14));

        JScrollPane scrollPane = new JScrollPane(table);

        // Layout
        frame.setLayout(new BorderLayout());
        frame.add(title, BorderLayout.NORTH);
        frame.add(scrollPane, BorderLayout.CENTER);

        frame.setVisible(true);
    }
}