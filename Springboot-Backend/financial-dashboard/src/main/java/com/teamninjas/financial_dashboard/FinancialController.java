// FinancialController.java
package com.teamninjas.financial_dashboard;

import org.springframework.core.io.ClassPathResource;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.io.IOException;
import java.nio.charset.StandardCharsets;

@RestController
public class FinancialController {

    @GetMapping("/balances")
    public String getBalances() throws IOException {
        ClassPathResource resource = new ClassPathResource("balances.json");

        byte[] fileData = FileCopyUtils.copyToByteArray(resource.getInputStream());
        String jsonContent = new String(fileData, StandardCharsets.UTF_8);

        return jsonContent;
    }
}