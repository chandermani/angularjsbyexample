export class Exercise {
    name: string;
    title: string;
    description: string;
    image: string;
    related: { videos: Array<string> } = {videos:[]};
    //this.related.videos = (args.related && args.related.videos) ? args.related.videos : [];
    nameSound: string;
    procedure: string;
    constructor(args: any) {
        this.name = args.name;
        this.title = args.title;
        this.description = args.description;
        this.image = args.image;
        this.nameSound = args.nameSound;
        this.procedure = args.procedure;
        this.related.videos = (args.related && args.related.videos) ? args.related.videos : [];
    }
}
export class WorkoutPlan {
    exercises: Array<{ details: Exercise, duration: number }>;
    name: string;
    title: string;
    description: string;
    restBetweenExercise: number;
    constructor(args: any) {
        this.exercises = args.exercises || [];
        this.name = args.name;
        this.title = args.title;
        this.description = args.description;
        this.restBetweenExercise = args.restBetweenExercise;
    }

    totalWorkoutDuration(): number {
        if (this.exercises.length == 0) return 0;
        var total = 0;
        angular.forEach(this.exercises, function (exercise) {
            total = total + (exercise.duration ? exercise.duration : 0);
        });
        return (this.restBetweenExercise ? this.restBetweenExercise : 0) * (this.exercises.length - 1) + total;
    }
}

angular.module('app').factory('Exercise', [() => Exercise]);
angular.module('app').factory('WorkoutPlan', [() => WorkoutPlan]);