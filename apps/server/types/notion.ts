export interface INotionUser {
  access_token: string;
  token_type: string;
  bot_id: string;
  workspace_name: string;
  workspace_icon: null;
  workspace_id: string;
  owner: Owner;
  duplicated_template_id: null;
}

export interface Owner {
  type: string;
  user: User;
}

export interface User {
  object: string;
  id: string;
  name: string;
  avatar_url: string;
  type: string;
  person: Person;
}

export interface Person {
  email: string;
}
