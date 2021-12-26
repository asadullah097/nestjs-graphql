import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from 'src/employee/entities/employee.entity';
import { Repository } from 'typeorm';
import { EmployeeCreateDTO } from './dto/create-employee.input';
@Injectable()
export class EmployeeService {
    constructor(@InjectRepository(Employee) 
    private employeeRepository:Repository<Employee>
    ){}
  
    async findAll():Promise<Employee[]>{
     return this.employeeRepository.find({
         relations:['project']
     });
    }

    async create(empolyee:EmployeeCreateDTO):Promise<Employee>{
         let emp=this.employeeRepository.create(empolyee)
         return this.employeeRepository.save(emp)
    }
}
