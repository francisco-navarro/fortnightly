package es.fortnightly.back.servlet.config;

import javax.sql.DataSource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.core.io.support.ResourcePatternResolver;

import es.fortnightly.back.resources.persistence.UserMapper;


@Configuration
@MapperScan(basePackageClasses = { UserMapper.class } )
public class MyBatisConfig {

    @Autowired
    DataSource dataSource;
    
	private ResourcePatternResolver resourcePatternResolver = new PathMatchingResourcePatternResolver();
    
    @Bean
    public SqlSessionFactory sqlSessionFactory() throws Exception {
        final SqlSessionFactoryBean sessionFactory = new SqlSessionFactoryBean();
        sessionFactory.setDataSource(dataSource);
        sessionFactory.setTypeAliasesPackage("es.fortnightly.back.resources");
        sessionFactory.setMapperLocations(resourcePatternResolver.getResources("classpath:es/fortnightly/back/resources/persistence/*Mapper.xml"));
		
        return sessionFactory.getObject();
    }

}
