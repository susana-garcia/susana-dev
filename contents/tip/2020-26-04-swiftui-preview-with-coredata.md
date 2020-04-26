---
title: 'SwiftUI Preview with CoreData'
description: 'The SwiftUI preview errors when using CoreData managed object context.'
tags: ['swiftui', 'coredata', 'preview']
publishedAt: '2020-04-26T18:06:07.227Z'
updatedAt:
---

## Preview Error

When you're using CoreData in a SwiftUI `View`, you'll get erros when resuming the preview with the following code.

```swift
struct ContentView: View {
  @Environment(\.managedObjectContext) var moc

  var body: some View {
    Text("hello World")
  }
}

struct ContentView_Previews: PreviewProvider {
  static var previews: some View {
    ContentView()
  }
}

```

The reason is that your preview `ContentView()` does not have a managed object context.

## Solution

One solution I found is to create a wrapper view which adds test data to the managed object context and passes it back to the view.

```swift
struct PreviewCoreDataWrapper<Content: View>: View {
  let content: (NSManagedObjectContext) -> Content

  var body: some View {
    let managedObjectContext = (UIApplication.shared.delegate as! AppDelegate).persistentContainer.viewContext

    let todo = Todo(context: managedObjectContext)
    todo.title = "I Am Legend"

    return self.content(managedObjectContext)
  }

  init(@ViewBuilder content: @escaping (NSManagedObjectContext) -> Content) {
    self.content = content
  }
}

```

Now, you can embed every view which needs access to the managed object context within the `PreviewCoreDataWrapper` view
and access the `managedObjectContext` to pass it into the enviroment.

```swift
struct MoviesView_Previews: PreviewProvider {
  static var previews: some View {
    PreviewCoreDataWrapper { managedObjectContext in
      MoviesView().environment(\.managedObjectContext, managedObjectContext)
    }
  }
}
```

Now you can resume your preview and it should render just fine without any errors.

---

<small>
  If you have feedback or questions, please feel free to get in touch via Twitter.
</small>
