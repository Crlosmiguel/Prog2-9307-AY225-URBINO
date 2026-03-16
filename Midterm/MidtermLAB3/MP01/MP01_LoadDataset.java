import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class MP01_LoadDataset {
    public static void main(String[] args) {
        String filePath = "Sample_Data-Prog-2-csv.csv"; // Replace with your CSV file path
        int totalRecords = 0;

        try (BufferedReader br = new BufferedReader(new FileReader(filePath))) {
            while (br.readLine() != null) {
                totalRecords++;
            }
        } catch (IOException e) {
            System.out.println("Error reading file: " + e.getMessage());
        }

        System.out.println("Total number of records: " + totalRecords);
    }
}