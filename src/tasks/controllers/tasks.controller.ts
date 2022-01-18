import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductDto } from 'src/dtos/product.dto';

@Controller('api/task')
export class TasksController {
  @Get()
  getAllTasks() {
    return 'Todas las tareas';
  }

  @Get(':id')
  getTask(@Param('id') id: string) {
    return `Tarea # ${id}`;
  }

  @Post()
  createTask(@Body() body: ProductDto) {
    return body;
  }

  @Put(':id')
  updateTask(@Param('id') id: string, @Body() body: ProductDto) {
    return {
      body,
      id,
    };
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    return `Se elimino la tarea # ${id}`;
  }
}
