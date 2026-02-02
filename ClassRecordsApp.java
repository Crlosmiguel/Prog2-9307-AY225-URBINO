import java.awt.*;
import java.io.*;
import java.util.Scanner;
import javax.swing.*;
import javax.swing.table.DefaultTableModel;

public class ClassRecordsApp {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Class Records");
        frame.setSize(600, 400);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setLayout(new BorderLayout());

        // Table setup
        String[] columns = {"ID", "First name , last name", "LAB WORK 1" , "LAB WORK 2" , "LAB WORK 3 " , "PRELIM EXAM" , "ATTENDANCE GRADE" };
        DefaultTableModel model = new DefaultTableModel(columns, 0);
        JTable table = new JTable(model);
        JScrollPane scrollPane = new JScrollPane(table);
        frame.add(scrollPane, BorderLayout.CENTER);

        // Panel for inputs and buttons
        JPanel panel = new JPanel();
        panel.setLayout(new FlowLayout());

        JTextField idField = new JTextField(5);
        JTextField nameField = new JTextField(10);
        JTextField gradeField = new JTextField(5);

        JButton addButton = new JButton("Add");
        JButton deleteButton = new JButton("Delete");

        panel.add(new JLabel("ID:"));
        panel.add(idField);
        panel.add(new JLabel("Name:"));
        panel.add(nameField);
        panel.add(new JLabel("Grade:"));
        panel.add(gradeField);
        panel.add(addButton);
        panel.add(deleteButton);

        frame.add(panel, BorderLayout.SOUTH);

        // Load CSV data
        try {
            File file = new File("class_records.csv");
            Scanner scanner = new Scanner(file);
            if(scanner.hasNextLine()) scanner.nextLine(); // skip header
            while(scanner.hasNextLine()) {
                String line = scanner.nextLine();
                String[] data = line.split(",");
                model.addRow(data);
            }
            scanner.close();
        } catch (FileNotFoundException e) {
            JOptionPane.showMessageDialog(frame, "CSV file not found!");
        }

        // Add button action
        addButton.addActionListener(e -> {
            String id = idField.getText();
            String name = nameField.getText();
            String grade = gradeField.getText();
            if(!id.isEmpty() && !name.isEmpty() && !grade.isEmpty()) {
                model.addRow(new String[]{id, name, grade});
                idField.setText("");
                nameField.setText("");
                gradeField.setText("");
            } else {
                JOptionPane.showMessageDialog(frame, "Please fill all fields.");
            }
        });

        // Delete button action
        deleteButton.addActionListener(e -> {
            int selectedRow = table.getSelectedRow();
            if(selectedRow != -1) {
                model.removeRow(selectedRow);
            } else {
                JOptionPane.showMessageDialog(frame, "Select a row to delete.");
            }
        });

        frame.setVisible(true);
    }
}
