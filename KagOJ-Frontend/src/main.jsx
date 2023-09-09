import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import './scss/styles.scss';

import SemestersRoot, { loader as semestersRootLoader } from './routes/semestersRoot';
import ErrorPage from './error-page';

import Semester, { loader as semesterLoader, } from './routes/semester';
import SemesterEdit, { action as semesterEditAction, loader as semesterEditLoader } from './routes/semesterEdit';
import { action as semesterDeleteAction } from './routes/semesterDelete';
import CoursesRoot, { loader as coursesRootLoader } from './routes/coursesRoot';
import SemestersIndex from './routes/semestersIndex';
import SemesterCreate, { action as semesterCreateAction } from './routes/semesterCreate';
import CourseCreate, { action as courseCreateAction, loader as courseCreateLoader } from './routes/courseCreate';
import CoursesGrid from './components/coursesGrid';
import Course, { loader as courseLoader } from './routes/course';
import CourseEdit, { loader as courseEditLoader, action as courseEditAction } from './routes/courseEdit';
import { action as courseDeleteAction } from './routes/courseDelete';

import CoursePractice, { loader as coursePracticeLoader } from './routes/coursePractice';
import CourseMembers, { loader as courseMembersLoader } from './routes/courseMembers';
import CourseAssignments, { loader as courseAssignmentsLoader } from './routes/courseAssignments';
import AssignmentsRoot, { loader as assignmentsRootLoader } from './routes/assignmentsRoot';
import Assignment, { loader as assignmentLoader } from './routes/assignment';
import AssignmentEdit, { loader as assignmentEditLoader, action as assignmentEditAction } from './routes/assignmentEdit';
import AssignmentCreate, { loader as assignmentCreateLoader, action as assignmentCreateAction } from './routes/assignmentCreate';
import { action as assignmentDeleteAction } from './routes/assignmentDelete';
import MemberList from './routes/memberList';
import AddNewStudent from './routes/addNewStudent';
import CreateProblem from './routes/CreateProblem';
import SubmitAssignment from './routes/submitAssigmnet';
import CreateAssignment from './routes/createAssignment';
import ProblemDetails, { loader as ProblemLoader } from './routes/problemDetails';
import SubmissionContainer, { loader as SubmissionLoader } from './routes/submission';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/semesters"/>
  },
  {
    path: "/semesters",
    element: <SemestersRoot />,
    errorElement: <ErrorPage/>,
    loader: semestersRootLoader,
    children: [
      {
        index: true,
        element: <SemestersIndex/>
      },
      {
        path: "new",
        element: <SemesterCreate/>,
        action: semesterCreateAction
      },
      {
        path: ":semesterId",
        element: <Semester/>,
        loader: semesterLoader,
        children: [
          {
            index: true,
            element: <CoursesGrid/>,
            loader: coursesRootLoader
          }
        ]
      },
      {
        path: ":semesterId/edit",
        element: <SemesterEdit/>,
        loader: semesterEditLoader,
        action: semesterEditAction
      },
      {
        path: ":semesterId/delete",
        action: semesterDeleteAction
      },
    ],
  },
  {
    path: "/semesters/:semesterId/courses",
    element: <CoursesRoot/>,
    loader: coursesRootLoader,
    children: [
      {
        path: "new",
        element: <CourseCreate/>,
        action: courseCreateAction,
        loader: courseCreateLoader,
      },
      {
        path: ":courseId",
        element: <Course/>,
        loader: courseLoader,
        children: [
          {
            index: true,
            element: <Navigate to={"practice"} replace/>
          },
          {
            path: "practice",
            element: <CoursePractice/>,
            loader: coursePracticeLoader,
          },
          {
            path: "assignments_list",
            element: <CourseAssignments/>,
            loader: courseAssignmentsLoader,
          },
          {
            path: "members",
            element: <CourseMembers/>,
            loader: courseMembersLoader,
          },
          {
            path: "edit",
            element: <CourseEdit/>,
            loader: courseEditLoader,
            action: courseEditAction
          },
        ]
      },
      {
        path: ":courseId/delete",
        action: courseDeleteAction
      },
    ]
  },
  // {
  //   path: "/semesters/:semesterId/courses/:courseId/assignments",
  //   element: <AssignmentsRoot/>,
  //   loader: assignmentsRootLoader,
  //   children: [
  //     {
  //       path: ":assignmentId",
  //       element: <Assignment/>,
  //       loader: assignmentLoader,
  //       children: [
  //         {
  //           path: "edit",
  //           element: <AssignmentEdit/>,
  //           loader: assignmentEditLoader,
  //           action: assignmentEditAction
  //         }
  //       ]
  //     },
  //     {
  //       path: "new",
  //       element: <AssignmentCreate/>,
  //       action: assignmentCreateAction,
  //       loader: assignmentCreateLoader,
  //     },
  //     {
  //       path: ":assignmentId/delete",
  //       action: assignmentDeleteAction
  //     }
  //   ]
  // }, 
  {
    path: "/semesters/:semesterId/courses/:courseId/assignments",
    element: <AssignmentsRoot/>,
    loader: assignmentsRootLoader,
    children: [
      {
        index: true,
        element: <h2>Hello</h2>
      },
      {
        path: ":assignmentId",
        element: <h1>Hello There</h1>
      },
      {
        path: "new",
        element: <AssignmentCreate/>,
        action: assignmentCreateAction,
        loader: assignmentCreateLoader,
      }
    ]
  }, 
  //dummy paths - for pages that are not integrated yet
  {
    path: "/members",
    element: <MemberList />,
    errorElement: <ErrorPage/>,
    // loader: semestersRootLoader,
  },
  {
    path: "/add-new-member",
    element: <AddNewStudent />,
    errorElement: <ErrorPage/>,
    // loader: semestersRootLoader,
  },
  {
    path: "/create-problem",
    element: <CreateProblem />,
    errorElement: <ErrorPage/>,
    // loader: semestersRootLoader,
  },
  {
    path: "/submit-assignment",
    element: <SubmitAssignment />,
    errorElement: <ErrorPage/>,
    // loader: semestersRootLoader,
  },
  {
    path: "/semesters/:semesterId/courses/:courseId/practice/new",
    element: <CreateProblem/>
  },
  {
    path: "/semesters/:semesterId/courses/:courseId/practice/:problemId",
    element: <ProblemDetails/>,
    loader: ProblemLoader,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/semesters/:semesterId/courses/:courseId/practice/:problemId/submission/:submissionId",
    element: <SubmissionContainer/>,
    errorElement: <ErrorPage/>,
    loader: SubmissionLoader,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
