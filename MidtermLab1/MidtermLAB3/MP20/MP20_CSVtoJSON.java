import java.io.BufferedReader;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class MP20_CSVtoJSON {

    public static void main(String[] args) {

        // Scanner object to read user input
        Scanner scanner = new Scanner(System.in);

        // Ask the user to enter the dataset file path
        System.out.print("Enter CSV dataset file path: ");
        String filePath = scanner.nextLine();

        // Name of the output JSON file
        String outputFile = "output.json";

        BufferedReader reader = null;
        FileWriter writer = null;

        try {

            // Open CSV file using BufferedReader
            reader = new BufferedReader(new FileReader(filePath));

            // Create FileWriter for JSON output
            writer = new FileWriter(outputFile);

            String line;

            // Read the header row to use as JSON keys
            line = reader.readLine();

            if (line == null) {
                System.out.println("Dataset is empty.");
                return;
            }

            // Split header columns
            String[] headers = line.split(",");

            // Start JSON array
            writer.write("[\n");

            boolean firstRow = true;

            // Read remaining CSV rows
            while ((line = reader.readLine()) != null) {

                // Skip empty rows
                if (line.trim().isEmpty()) {
                    continue;
                }

                String[] values = line.split(",");

                // Add comma before next object (except first)
                if (!firstRow) {
                    writer.write(",\n");
                }

                writer.write("  {\n");

                // Convert each column to JSON key-value
                for (int i = 0; i < headers.length; i++) {

                    String key = headers[i].trim();
                    String value = "";

                    if (i < values.length) {
                        value = values[i].trim();
                    }

                    writer.write("    \"" + key + "\": \"" + value + "\"");

                    if (i < headers.length - 1) {
                        writer.write(",");
                    }

                    writer.write("\n");
                }

                writer.write("  }");

                firstRow = false;
            }

            // End JSON array
            writer.write("\n]");

            System.out.println("CSV successfully converted to JSON.");
            System.out.println("Output file: " + outputFile);

        } 
        catch (IOException e) {

            // Handle file errors
            System.out.println("Error reading file: " + e.getMessage());

        } 
        finally {

            try {
                if (reader != null) reader.close();
                if (writer != null) writer.close();
            } catch (IOException e) {
                System.out.println("Error closing file.");
            }

            scanner.close();
        }
    }
}