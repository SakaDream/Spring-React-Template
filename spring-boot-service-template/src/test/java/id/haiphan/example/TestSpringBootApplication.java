package id.haiphan.example;

import org.springframework.boot.SpringApplication;

public class TestSpringBootApplication {

    public static void main(String[] args) {
        SpringApplication.from(SpringBootApplication::main).with(TestcontainersConfiguration.class).run(args);
    }

}
