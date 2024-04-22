import { Controller, Get } from '@nestjs/common';
import { TagsService } from './tags.service';
import { TagsEntity } from './tag.entity';

@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Get()
  async findAll(): Promise<TagsEntity[]> {
    return this.tagsService.findAll();
  }
}
