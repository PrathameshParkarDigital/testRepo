+import os, sys
+
+def d(v):
+    if v==1:
+        print("value is one")
+    else:
+        if v==2:
+            print("value is two")
+        else:
+            if v==3:
+                print("value is three")
+            else:
+                try:
+                    print("val:", v/0)
+                except:
+                    print("something went wrong")
+
+class myclass:
+    def __init__(self,password):
+        print(f"password: {password}")
+
+    def x(self):
+        return True
+
+d(3)
+user = myclass("secret123")
