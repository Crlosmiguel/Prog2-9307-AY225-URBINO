import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class MP02 {  // <-- Class name matches file name exactly

    public static void main(String[] args) {

        String file = "Sample_Data-Prog-2-csv.csv"; // Make sure dataset.csv is in the same folder
        int count = 0;

        try {
            BufferedReader br = new BufferedReader(new FileReader(file));
            String line;

            while ((line = br.readLine()) != null && count < 10) {
                System.out.println(line);  // Print each row
                count++;
            }

            br.close();

        } catch (IOException e) {
            System.out.println("Error reading file: " + e.getMessage());
        }
    }
}