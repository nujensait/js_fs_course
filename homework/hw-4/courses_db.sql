CREATE TABLE `course` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`name` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `student` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`fio` varchar(255) NOT NULL,
	`login` varchar(255) NOT NULL UNIQUE,
	`password` varchar(100) NOT NULL,
	`email` varchar(100) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `group` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`course_id` INT(11) NOT NULL,
	`student_id` INT(11) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `teacher` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`fio` varchar(100) NOT NULL,
	`login` varchar(100) NOT NULL UNIQUE,
	`password` varchar(100) NOT NULL,
	`email` varchar(100) NOT NULL UNIQUE,
	PRIMARY KEY (`id`)
);

CREATE TABLE `course_teacher` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`teacher_id` INT(11) NOT NULL,
	`course_id` INT(11) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `homework` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`student_id` INT(11) NOT NULL,
	`lesson_id` INT(11) NOT NULL,
	`mark` INT(11) NOT NULL,
	`is_passed` BOOLEAN NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `lesson` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`name` varchar(255) NOT NULL,
	`course_id` INT(11) NOT NULL,
	`content` TEXT NOT NULL,
	`webinar_url` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `schedule` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`lesson_id` INT(11) NOT NULL,
	`teacher_id` INT(11) NOT NULL,
	`group_id` INT(11) NOT NULL,
	`start_time` DATETIME NOT NULL,
	`end_time` DATETIME NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `lesson_material` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`lesson_id` INT NOT NULL,
	`name` varchar(255) NOT NULL,
	`path` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

ALTER TABLE `group` ADD CONSTRAINT `group_fk0` FOREIGN KEY (`course_id`) REFERENCES `course`(`id`);

ALTER TABLE `group` ADD CONSTRAINT `group_fk1` FOREIGN KEY (`student_id`) REFERENCES `student`(`id`);

ALTER TABLE `course_teacher` ADD CONSTRAINT `course_teacher_fk0` FOREIGN KEY (`teacher_id`) REFERENCES `teacher`(`id`);

ALTER TABLE `course_teacher` ADD CONSTRAINT `course_teacher_fk1` FOREIGN KEY (`course_id`) REFERENCES `course`(`id`);

ALTER TABLE `homework` ADD CONSTRAINT `homework_fk0` FOREIGN KEY (`student_id`) REFERENCES `student`(`id`);

ALTER TABLE `homework` ADD CONSTRAINT `homework_fk1` FOREIGN KEY (`lesson_id`) REFERENCES `lesson`(`id`);

ALTER TABLE `lesson` ADD CONSTRAINT `lesson_fk0` FOREIGN KEY (`course_id`) REFERENCES `course`(`id`);

ALTER TABLE `schedule` ADD CONSTRAINT `schedule_fk0` FOREIGN KEY (`lesson_id`) REFERENCES `lesson`(`id`);

ALTER TABLE `schedule` ADD CONSTRAINT `schedule_fk1` FOREIGN KEY (`teacher_id`) REFERENCES `teacher`(`id`);

ALTER TABLE `schedule` ADD CONSTRAINT `schedule_fk2` FOREIGN KEY (`group_id`) REFERENCES `group`(`id`);

ALTER TABLE `lesson_material` ADD CONSTRAINT `lesson_material_fk0` FOREIGN KEY (`lesson_id`) REFERENCES `lesson`(`id`);










