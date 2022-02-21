import { IsBoolean, IsString } from "class-validator";

export class UpdateDocumentTypeDto {
    @IsString()
    name: string;

    @IsBoolean()
    status: boolean;
}
