export class DataModel {
  image: string = '';
  description: string = '';
  githubUrl: string = '';
  githubPagesUrl: string = '';

  constructor(init?: DataModel) {
    if (init) {
      Object.assign(this, init);
    }
  }
}
