package tn.iit.fod.login.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

@Configuration
@EnableWebSecurity
public class SpringSecurityConfig extends WebSecurityConfigurerAdapter {

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.csrf().disable().authorizeRequests().antMatchers(HttpMethod.OPTIONS, "/**").permitAll().anyRequest()
				.authenticated().and()
				.httpBasic();
	}
	@Bean
	@Override
	public UserDetailsService userDetailsService() {
		UserDetails user =
				User.withDefaultPasswordEncoder()
						.username("user")
						.password("password")
						.roles("USER")
						.build();
		UserDetails user2 =
				User.withDefaultPasswordEncoder()
						.username("user2")
						.password("password")
						.roles("USER")
						.build();

		return new InMemoryUserDetailsManager(user,user2);

	}


}