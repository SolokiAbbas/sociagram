Users
id              integer     not null, primary key
username        string      not null, indexed, unique
Fname           string      not null
Lname           string      not null
email           string      not null, indexed, unique
password_digest string      not null
session_token   string      not null

Posts
id              integer     not null, primary key
title           string      not null
body            string      not null
author_id       integer     not null, foreign key
likes_id        integer     not null, foreign key
comments_id     integer     not null, foreign key

Comments
id              integer     not null, primary key
body            string      not null
author_id       integer     not null, foreign key
post_id         integer     not null, foreign key

Likes
id              integer     not null, primary key
user_id         integer     not null, foreign key
author_id       integer     not null, foreign key

Follows
id              integer     not null, primary key
user_id         integer     not null, foreign key
author_id       integer     not null, foreign key
