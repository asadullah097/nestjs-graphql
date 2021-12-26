import { Resolver,Query, Mutation, Args } from '@nestjs/graphql';
import { Employee } from 'src/employee/entities/employee.entity';
import { EmployeeCreateDTO } from './dto/create-employee.input';
import { EmployeeService } from './employee.service';

@Resolver()
export class EmployeeResolver {
    constructor(private employeeService:EmployeeService){}

    @Query(()=>[Employee] ,{name:"getAllEmployees"})
    findAll(){
      return this.employeeService.findAll();
    }

    @Mutation(()=>Employee,{name:"createEmployee"})
    create(@Args("employeeInput") employee:EmployeeCreateDTO){
      return this.employeeService.create(employee)
    }
}
