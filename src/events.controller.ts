import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from "@nestjs/common";
import { CreateEventDTO } from "./create-event.dto";

@Controller('/events')
export class EventsController {
  @Get()
  findAll() {
    return [
      { id: 1, name: 'First event' },
      { id: 2, name: 'Second event' },
    ]
  }

  @Get(':id')
  findOne(@Param('id') id) {
    return [
      { id: 1, name: 'First event' }
    ]
  }

  @Post()
  create(@Body() input: CreateEventDTO) {
    return input;
  }

  @Patch(':id')
  update(@Param('id') id, @Body() input) {
    return input;
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id) {}
}